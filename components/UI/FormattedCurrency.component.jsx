import NumberFormat from 'react-number-format';

// NOTE: this component displays number as an formatted currency
const FormattedCurrency = ({ value }) => (
  <NumberFormat displayType='text' value={value} thousandSeparator=' ' prefix='€' decimalScale={2} fixedDecimalScale={true} />
);

export default FormattedCurrency;
