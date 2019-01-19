import React from 'react';
import {Fab, withStyles} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 8,
        right: theme.spacing.unit * 2
    }
});

class OpenModalButton extends React.Component {

    render() {
        const { classes, onClick } = this.props;
        return(
          <Fab
            color={'primary'}
            className={classes.fab}
            onClick={onClick}
          >
              <AddIcon />
          </Fab>
        )
    }
}

export default withStyles(styles, { withTheme: true })(OpenModalButton);