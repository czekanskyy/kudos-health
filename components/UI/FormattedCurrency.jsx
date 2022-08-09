import NumberFormat from 'react-number-format';

const FormattedCurrency = ({ value }) => (
  <NumberFormat displayType='text' value={value} thousandSeparator=' ' prefix='€' decimalScale={2} fixedDecimalScale={true} />
);

export default FormattedCurrency;
