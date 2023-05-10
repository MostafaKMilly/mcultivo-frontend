import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarProps,
} from "@mui/x-data-grid";
import { Box, Button, Divider, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { GenericDialog, useDialog, useGenericMutation } from "@/shared";
import { deleteAccount } from "../graphql/mutations/deleteAccount";

export const AccountsTableToolbar = (props: AccountsTableToolbarProps) => {
  const { rowsSelection } = props;
  const { openDialog, closeDialog, isDialogOpen } =
    useDialog<"deleteAccount">();
  const [removeAccount] = useGenericMutation<
    { __typename: string },
    { id: string }
  >(deleteAccount, { refetchQueries: ["AccountsQuery"] });

  const handleDeleteAccount = () => {
    const [id] = rowsSelection;
    removeAccount({
      variables: { id },
      onCompleted: () => {
        closeDialog();
      },
    });
  };

  return (
    <GridToolbarContainer sx={{ justifyContent: "end", m: 2 }}>
      {rowsSelection.length ? (
        <>
          <Box display="flex" columnGap={2}>
            <Button
              variant="text"
              startIcon={<DoneIcon />}
              disabled={rowsSelection.length !== 1}
            >
              APPROVE
            </Button>
            <Button variant="text" startIcon={<LocalOfferIcon />}>
              TAG
            </Button>
            <Button
              variant="text"
              startIcon={<DeleteIcon />}
              disabled={rowsSelection.length !== 1}
              onClick={() => {
                openDialog("deleteAccount");
              }}
            >
              DELETE
            </Button>
            <Button variant="text" startIcon={<SaveIcon />}>
              SAVE VIEW
            </Button>
          </Box>
          <Divider orientation="vertical" />
        </>
      ) : (
        <></>
      )}
      <GridToolbarExport variant="text" />
      <GridToolbarColumnsButton variant="text" />
      <GenericDialog
        open={isDialogOpen("deleteAccount")}
        onClose={closeDialog}
        maxWidth="xs"
        dialog={{
          title: "Delete Account ? ",
          submitButton: {
            label: "Delete",
            variant: "text",
          },
        }}
        onSubmit={handleDeleteAccount}
      >
        <Typography variant="body1" sx={{ color: "common.black" }}>
          Are you sure you want to delete this account ?
        </Typography>
      </GenericDialog>
    </GridToolbarContainer>
  );
};

type AccountsTableToolbarProps = GridToolbarProps & {
  rowsSelection: string[];
};
