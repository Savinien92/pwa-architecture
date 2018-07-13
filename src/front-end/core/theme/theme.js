import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(0, 0, 0, 0.14)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    }
  },
  overrides: {
    MuiTouchRipple: {
      child: {
        backgroundColor: "#000"
      }
    }
  }
});