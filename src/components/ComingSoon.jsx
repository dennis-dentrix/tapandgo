import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
} from "@mui/material";

export const ComingSoon = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle style={{ fontSize: 18, fontFamily: "Bold" }}>
        {"Coming soon"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-slide-description"
          style={{ fontSize: 14, fontFamily: "Regular" }}
        >
          We are currently developing this feature for you. You will be notified
          when the feature is available for use.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.close}
          style={{
            fontSize: 14,
            color: "#e3762b",
            fontFamily: "Regular",
          }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
