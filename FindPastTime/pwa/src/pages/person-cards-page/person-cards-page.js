import { Header } from '../../components/header';
import { PersonCards } from '../../components/person-cards';
import { SwipeButtons } from '../../components/swipe-buttons';
import { ROUTES } from '../../constants/routes';
import './person-cards-page.css';

export const PersonCardsPage = () =>  {
  return (
    <div>
      <Header backButton={ROUTES.MAIN} />
      <PersonCards />
    </div>
  );
}
