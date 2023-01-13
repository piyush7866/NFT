import React from "react";
import { Typography } from "@mui/material";
import { Page } from "../../components/page";
import { ConnectOptions } from "./connect-options";
import { CommentedBlock } from "../../components/common/commented-block";
import { ConnectionStatus } from "./connection-status";

export function ConnectPage() {
  return (
    <Page header={"Wallet Connect"}>
      <CommentedBlock sx={{ my: 2 }}>
        <ConnectionStatus />
      </CommentedBlock>

      <CommentedBlock sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Connect to:{" "}
        </Typography>
        <ConnectOptions />
      </CommentedBlock>
    </Page>
  );
}
