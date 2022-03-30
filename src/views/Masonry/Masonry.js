import React, { useMemo } from 'react';
import { useWallet } from 'use-wallet';
import moment from 'moment';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import { makeStyles } from '@mui/styles';
import useTreasury from "../../hooks/useTreasury"

import { Box, Card, CardContent, Button, Typography, Grid } from '@mui/material';

import { Alert } from '@mui/lab';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';

import useRedeemOnMasonry from '../../hooks/useRedeemOnMasonry';
import useStakedBalanceOnMasonry from '../../hooks/useStakedBalanceOnMasonry';
import { getDisplayBalance } from '../../utils/formatBalance';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useFetchMasonryAPR from '../../hooks/useFetchMasonryAPR';

import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import useCashPriceInNextTWAP from '../../hooks/useCashPriceInNextTWAP';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useTotalTVLOnMasonry from '../../hooks/useTotalTVLOnMasonry';
import useClaimRewardCheck from '../../hooks/masonry/useClaimRewardCheck';
import useWithdrawCheck from '../../hooks/masonry/useWithdrawCheck';
import ProgressCountdown from './components/ProgressCountdown';
// import MasonryImage from '../../assets/img/masonry.png';
import { createGlobalStyle } from 'styled-components';
import useTotalStakedOnMasonry from "../../hooks/useTotalStakedOnMasonry";
import useShareStats from "../../hooks/usetShareStats";

// const BackgroundImage = createGlobalStyle`
//   body, html {
//     background: url(${MasonryImage}) no-repeat !important;
//     background-size: cover !important;
//   }
// `;

const BackgroundImage = createGlobalStyle`
  body {
    background-color: var(--black);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%231D1E1F' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
}

* {
    border-radius: 0 !important;
    box-shadow: none !important;
}
`;

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Masonry = () => {
  const classes = useStyles();
  const { account } = useWallet();
  const { onRedeem } = useRedeemOnMasonry();
  const stakedBalance = useStakedBalanceOnMasonry();
  const currentEpoch = useCurrentEpoch();
  //const cashStat = useCashPriceInEstimatedTWAP();
  //const nextCashStat = useCashPriceInNextTWAP();
  const totalTVL = useTotalTVLOnMasonry();
  const totalStaked = useTotalStakedOnMasonry();
  const { apr, dpr } = useFetchMasonryAPR();
  const canClaimReward = useClaimRewardCheck();
  const canWithdraw = useWithdrawCheck();
  //const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
  const { to } = useTreasuryAllocationTimes();
  const rebateStats = useTreasury()
  const theoryStats = useShareStats();

  return (
    <Page>
      <BackgroundImage />
      {!!account ? (
        <>
          {/*<Alert variant="filled" severity="info" style={{ marginTop: '50px' }}>*/}
          {/*  Theoretics will start at {(new Date('2022-03-28T12:00:00Z')).toString()}.*/}
          {/*</Alert>*/}
          <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
            Theoretics
          </Typography>
          <Alert variant="filled" severity="warning" style={{ marginBottom: '50px' }}>
            The withdraw fee changes the longer you are in the theoretics. The fees are as follows: 1 block = 25%, less than 1 hour = 8%, less than 1 day = 4%, less than 3 days = 2%, less than 5 days = 1%, less than 2 weeks = 0.5%, less than 4 weeks = 0.25%, equal to or more than 4 weeks = 0.01%. Depositing or claiming does not reset your withdraw fee.
          </Alert>
          <Alert variant="filled" severity="warning" style={{ marginBottom: '50px' }}>
            Withdrawing any amount also claims your rewards. The amount of rewards locked increases the closer to under-peg GAME is. At 1.01 or lower, it is 95%. At 4.0 or higher, it is 0%. You get your rewards after the epoch is over if the TWAP (time-weighted average price) is greater or equal to 1.01.{rebateStats.outOfBootstrap ? "" : " Also, the bootstrap phase is ongoing for " + rebateStats.bootstrapEpochsLeft + " more epochs, so GAME is being printed regardless of the TWAP right now."} You can find your locked LGAME rewards using the My Wallet button. View the docs for more info.
          </Alert>
          <Box mt={5}>
            <Grid container justifyContent="center" rowSpacing={13} columnSpacing={3}>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent>
                    <Typography style={{ textAlign: 'center' }}>Next Epoch</Typography>
                    <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Current Epoch</Typography>
                    <Typography>{Number(currentEpoch)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>
                      GAME Price<small> (TWAP)</small>
                    </Typography>
                    <Typography>{rebateStats.tombPrice.toFixed(4)} DAI</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>
                      Price<small> (Next TWAP)</small>
                    </Typography>
                    <Typography>{rebateStats.tombPriceUpdated.toFixed(4)} DAI</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Total APR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPrice >= 1.01) ? apr.toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Total DPR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPrice >= 1.01) ? dpr.toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>GAME APR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPrice >= 1.01) ? (apr*(100.0-rebateStats.rewardsLocked)/100.0).toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>LGAME APR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPrice >= 1.01) ? (apr*rebateStats.rewardsLocked/100.0).toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>GAME DPR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPrice >= 1.01) ? (dpr*(100.0-rebateStats.rewardsLocked)/100.0).toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>LGAME DPR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPrice >= 1.01) ? (dpr*rebateStats.rewardsLocked/100.0).toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>LGAME Percentage</Typography>
                    <Typography>{(rebateStats.rewardsLocked).toFixed(2)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Next GAME APR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPriceUpdated >= 1.01) ? (apr*(100.0-rebateStats.nextRewardsLocked)/100.0).toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Next LGAME APR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPriceUpdated >= 1.01) ? (apr*rebateStats.nextRewardsLocked/100.0).toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Next GAME DPR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPriceUpdated >= 1.01) ? (dpr*(100.0-rebateStats.nextRewardsLocked)/100.0).toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Next LGAME DPR</Typography>
                    <Typography>{(!rebateStats.outOfBootstrap || rebateStats.tombPriceUpdated >= 1.01) ? (dpr*rebateStats.nextRewardsLocked/100.0).toFixed(2) : "0.00"}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Next LGAME Percentage</Typography>
                    <Typography>{(rebateStats.nextRewardsLocked).toFixed(2)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>Your Current Withdraw Fee</Typography>
                    <Typography>{(rebateStats.currentWithdrawFeeOf / 100).toFixed(2)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>TVL</Typography>
                    <Typography>${totalTVL.toFixed(2)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>THEORY Staked</Typography>
                    <Typography>{getDisplayBalance(totalStaked)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography>THEORY Staked % (Circ.+Locked)</Typography>
                    <Typography>{((Number(getDisplayBalance(totalStaked))/(Number(theoryStats?.circulatingSupply)/*-(28555.3529+25959.4118)*/))*100).toFixed(2)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Box mt={3} style={{ width: '525px' }}>
                <Alert variant="transparent" severity="info">
                   Rewards can only be claimed after {rebateStats.currentClaimEpochs} {rebateStats.currentClaimEpochs == 1 ? "epoch" : "epochs"} since last action. Staked THEORY can only be withdrawn after {rebateStats.currentWithdrawEpochs} {rebateStats.currentWithdrawEpochs == 1 ? "epoch" : "epochs"} since last action (deposit, withdraw, etc.).
                </Alert>
              </Box>
            </Grid>

            <Grid container justifyContent="center">
              <Box mt={3} style={{ width: '525px' }}>
                <Alert variant="transparent" severity="info">
                  Next TWAP determines if rewards will be distributed at the end of an epoch. TWAP determines everything else. The number of epochs that you have to wait increases as time progresses. Check the docs for more info.
                </Alert>
              </Box>
            </Grid>

            <Box mt={4}>
              <StyledBoardroom>
                <StyledCardsWrapper>
                  <StyledCardWrapper>
                    <Harvest rewardsLocked={rebateStats.rewardsLocked} />
                  </StyledCardWrapper>
                  <Spacer />
                  <StyledCardWrapper>
                    <Stake />
                  </StyledCardWrapper>
                </StyledCardsWrapper>
              </StyledBoardroom>
            </Box>

            {/* <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={4}>
              <Card>
                <CardContent align="center">
                  <Typography>Rewards</Typography>

                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                  <Button color="primary" variant="outlined">Claim Reward</Button>
                </CardActions>
                <CardContent align="center">
                  <Typography>Claim Countdown</Typography>
                  <Typography>00:00:00</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent align="center">
                  <Typography>Stakings</Typography>
                  <Typography>{getDisplayBalance(stakedBalance)}</Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                  <Button>+</Button>
                  <Button>-</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid> */}
          </Box>

          <Box mt={5}>
            <Grid container justifyContent="center" spacing={3} mt={10}>
              <Button
                disabled={stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)}
                onClick={onRedeem}
                color="primary"
                variant="contained"
              >
                Claim and Withdraw
              </Button>
            </Grid>
          </Box>
        </>
      ) : (
        <UnlockWallet />
      )}
    </Page>
  );
};

const StyledBoardroom = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Masonry;
