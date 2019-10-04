import styled from "styled-components"

const StyledCountrySelector = styled.select`
  align-self: flex-end;
  margin: 0 24px;
`

const CountrySelector = ({ countries, setCurrentCountry }) => {
  const handleCountrySelectorChange = e => setCurrentCountry(e.target.value)

  return (
    <StyledCountrySelector onChange={handleCountrySelectorChange}>
      {countries.map(country => (
        <option value={country.code}>{country.name}</option>
      ))}
    </StyledCountrySelector>
  )
}

export default CountrySelector
