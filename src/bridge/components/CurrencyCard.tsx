import { Currency, Pair } from "@arborswap/sdk";
import {
  Button,
  ChevronDownIcon,
  Text,
  useModal,
  Flex,
  Box,
  ChevronRightIcon,
} from "../../uikit";
import styled from "styled-components";
import { AutoColumn } from "components/Layout/Column";
import { useTranslation } from "contexts/Localization";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useCurrencyBalance } from "state/wallet/hooks";
import CurrencySearchModal from "components/SearchModal/CurrencySearchModal";
import { CurrencyLogo, DoubleCurrencyLogo } from "components/Logo";
import { RowBetween } from "components/Layout/Row";

// const InputRow = styled.div<{ selected: boolean }>`
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: center;
//   justify-content: flex-end;
//   padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
// `
// const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })`
//   padding: 0 0.5rem;
// `
// const LabelRow = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: center;
//   color: ${({ theme }) => theme.colors.text};
//   font-size: 0.75rem;
//   line-height: 1rem;
//   padding: 0.75rem 1rem 0.75rem 1rem;
// `
// const InputPanel = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   position: relative;
//   border-radius: '20px';
//   // background-color: ${({ theme }) => theme.colors.backgroundAlt};
//   z-index: 1;
// `
// const Container = styled.div`
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.colors.input};
//   box-shadow: ${({ theme }) => theme.shadows.inset};
// `
interface CurrencyProps {
  value: string;
  onUserInput: (value: string) => void;
  onMax?: () => void;
  showMaxButton: boolean;
  label?: string;
  onCurrencySelect: (currency: Currency) => void;
  currency?: Currency | null;
  disableCurrencySelect?: boolean;
  hideBalance?: boolean;
  pair?: Pair | null;
  otherCurrency?: Currency | null;
  id: string;
  showCommonBases?: boolean;
  titleLabel?: string;
  Buttonheading?: string;
  stake?: boolean;
  imgURl?: string;
  hideFrom?: boolean;
}
export default function CurrencyCard({
  value,
  onUserInput,
  onMax,
  stake,
  showMaxButton,
  Buttonheading,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  otherCurrency,
  id,
  showCommonBases,
  titleLabel,
  imgURl,
  hideFrom = false,
}: CurrencyProps) {
  const { account } = useActiveWeb3React();
  const selectedCurrencyBalance = useCurrencyBalance(
    account ?? undefined,
    currency ?? undefined
  );
  const { t } = useTranslation();

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />
  );
  return (
    <Box id={id}>
      <Flex mb="6px" alignItems="center" justifyContent="space-between">
        <RowBetween>
          <Flex flexDirection="row" alignItems="center">
            {!hideFrom && (
              <Text fontSize="14px" color="textSubtle">
                {titleLabel}
              </Text>
            )}
          </Flex>

          {account && !hideBalance && (
            <Flex alignItems="center">
              <Text
                onClick={onMax}
                color="textSubtle"
                fontSize="14px"
                style={{
                  display: "inline",
                  cursor: "pointer",
                  paddingRight: "10px",
                }}
              >
                {currency
                  ? t("Bal: %balance%", {
                      balance:
                        selectedCurrencyBalance?.toSignificant(6) ??
                        t("Loading"),
                    })
                  : " -"}
              </Text>
              <Text fontSize="14px" color="textSubtle">
                MAX
              </Text>
            </Flex>
          )}
        </RowBetween>
      </Flex>
      <Flex flexDirection="row" alignItems="center">
        <CurrencySelectButton
          className="open-currency-select-button"
          selected={!!currency}
          onClick={() => {
            if (!disableCurrencySelect) {
              onPresentCurrencyModal();
            }
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            style={{ marginRight: "-16px" }}
          >
            {pair ? (
              <DoubleCurrencyLogo
                currency0={pair.token0}
                currency1={pair.token1}
                size={16}
                margin
              />
            ) : currency ? (
              <CurrencyLogo
                currency={currency}
                size="24px"
                style={{ marginRight: "8px" }}
              />
            ) : null}
            {pair ? (
              <Text id="pair" bold>
                {pair?.token0.symbol}:{pair?.token1.symbol}
              </Text>
            ) : (
              <Text id="pair" bold>
                {(currency && currency.symbol && currency.symbol.length > 20
                  ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                      currency.symbol.length - 5,
                      currency.symbol.length
                    )}`
                  : currency?.symbol) || t("Select a currency")}
              </Text>
            )}
            {!disableCurrencySelect && (
              <ChevronDownIcon width="32px" color="textSubtle" />
            )}
          </Flex>
        </CurrencySelectButton>
      </Flex>
    </Box>
  );
}
