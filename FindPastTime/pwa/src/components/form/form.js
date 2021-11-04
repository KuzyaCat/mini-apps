import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import './form.css';

export function Form(props) {
  const { inputs, disabled, onSubmit, errorMessage } = props;

  return (
    <form className="form">
      <MuiThemeProvider>
        <>
          {inputs.map((input) =>
            input.type === 'select'
            ? (
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={input.value}
                onChange={(e) => input.onChange(e)}
                onBlur={input.onBlur}
                error={(input.isDirty && input.errorMessage) ? 'Error' : null}
                helperText={(input.isDirty && input.errorMessage) ? input.errorMessage : input.placeholder}
              >
                {input.items?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )
            : (
              <>
                <TextField
                  placeholder={input.placeholder}
                  label={input.label}
                  onChange={(e) => input.onChange(e)}
                  onBlur={input.onBlur}
                  defaultValue={input.value}
                  error={(input.isDirty && input.errorMessage) ? 'Error' : null}
                  helperText={(input.isDirty && input.errorMessage) && input.errorMessage}
                  margin="normal"
                  type={input.type}
                  fullWidth
                />
                <br />
              </>
            )
          )}
          {errorMessage && <span className="form__error-message">{errorMessage}</span>}
          <Button
            style={{ marginTop: '25px', height: '35px' }}
            color="primary"
            variant="contained"
            onClick={(e) => onSubmit()}
            disabled={disabled}
          >Continue</Button>
        </>
      </MuiThemeProvider>
    </form>
  );
}

