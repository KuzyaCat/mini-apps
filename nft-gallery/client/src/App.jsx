import {
  useApps,
  useOrganization,
  usePermissions,
} from '@aragon/connect-react'
import connectVoting from '@aragon/connect-voting';
import { createAppHook, useApp } from '@aragon/connect-react';

import { Install } from './components/install';
import { Home } from './components/home';

const useVoting = createAppHook(connectVoting);

function App() {
  const [voting] = useApp('voting');
  console.log('voting', voting);
  const [org, orgStatus] = useOrganization();
  console.log('org', org);
  console.log('orgStatus', orgStatus);
  const [votes] = useVoting(
    voting,
    (app) => app.votes({ first: 10, skip: 10 * page }),
    [1]
  );
  console.log('votes', votes);

  const [apps, appsStatus] = useApps();
  console.log('apps', apps);
  const [permissions, permissionsStatus] = usePermissions();
  console.log('permissions', permissions);

  const loading = orgStatus.loading || appsStatus.loading || permissionsStatus.loading;
  console.log('loading', loading);
  const error = orgStatus.error || appsStatus.error || permissionsStatus.error;
  console.log('error', error);

  useEffect(async () => {
    const org = await connect('example.aragonid.eth', 'thegraph', { network: 4 });
    console.log('org manual', org);
  }, []);

  if (loading) {
    return <p>Loading…</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (window.ethereum) {
    return <>
      <>
        <h1>{org.name}</h1>

        <h2>Apps</h2>
        <ul>
          {apps.map((app, i) => (
            <li key={i}>{app.name}</li>
          ))}
        </ul>

        <h2>Permissions</h2>
        <ul>
          {permissions.map((permission, i) => (
            <li key={i}>{String(permission)}</li>
          ))}
        </ul>
      </>
      <Home />
    </>;
  }

  return <Install />;
}

export default App;
