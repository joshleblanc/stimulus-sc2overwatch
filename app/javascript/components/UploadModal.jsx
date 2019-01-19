import React from 'react';
import {
    Dialog,
    withMobileDialog,
    DialogTitle,
    withStyles,
    DialogContent,
    DialogActions,
    DialogContentText,
    Step,
    StepLabel,
    Stepper,
    StepContent,
    Button
} from '@material-ui/core';
import OpenModalButton from "./OpenModalButton";

const styles = theme => ({
    paper: {
        overflowY: 'hidden'
    }
});

class UploadModal extends React.Component {

    state = {
        open: false,
        step: 0
    };

    openModal = () => {
        this.setState({
            open: true
        })
    };

    closeModal = () => {
        this.setState({ open: false });
    };

    render() {
        const {
            fullScreen,
            classes,
        } = this.props;
        const {
            open,
            step
        } = this.state;
        return(
          <React.Fragment>
              <Dialog
                open={open}
                fullScreen={fullScreen}
                fullWidth
                classes={classes}
                data-target={"upload-modal.modal"}
              >
                  <DialogTitle>Report a player</DialogTitle>
                  <DialogContent>
                      <Stepper activeStep={step} orientation={'vertical'}>
                          <Step>
                              <StepLabel>Upload a replay</StepLabel>
                              <StepContent>
                                  {/*<ReplayDropzone onUploadFinished={this.handleUploadFinished}/>*/}
                              </StepContent>
                          </Step>
                          <Step>
                              <StepLabel>Enter Details</StepLabel>
                              <StepContent>
                                  {/*<PlayerSelect*/}
                                    {/*players={players}*/}
                                    {/*onChange={this.handlePlayerChange}*/}
                                    {/*value={name}*/}
                                  {/*/>*/}
                                  {/*<EvidenceTextField*/}
                                    {/*value={evidence}*/}
                                    {/*onChange={this.handleEvidenceChange}*/}
                                  {/*/>*/}
                              </StepContent>
                          </Step>
                      </Stepper>
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={this.closeModal}>Close</Button>
                      {/*<SubmitButton*/}
                        {/*onClick={this.handleFormSubmit}*/}
                        {/*disabled={!this.formValid()}*/}
                        {/*loading={submitting}*/}
                      {/*/>*/}
                  </DialogActions>
              </Dialog>
              <OpenModalButton onClick={this.openModal}/>
          </React.Fragment>
        )
    }
}

export default withStyles(styles, { withTheme: true })(UploadModal);