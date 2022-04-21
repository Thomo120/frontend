import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';

const useProvideTombFtmLP = () => {
  const tombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleProvideTombFtmLP = useCallback(
    (ftmAmount: string, tombAmount: string) => {
      const tombAmountBn = parseUnits(tombAmount);
      // handleTransactionReceipt(
      //   tombFinance?.provideTombFtmLP(ftmAmount, tombAmountBn),
      //   `Provide Tomb-FTM LP ${tombAmount} ${ftmAmount}`,
      // );
    },
    [tombFinance, handleTransactionReceipt],
  );
  return { onProvideTombFtmLP: handleProvideTombFtmLP };
};

export default useProvideTombFtmLP;