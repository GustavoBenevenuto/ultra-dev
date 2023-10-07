
<h1 align="center">
    <a href="https://github.com/GustavoBenevenuto/ultra-dev">🔗 ultra-dev</a>
</h1>


<h4 align="center"> 
	🚧  ultra-dev: Under construction...  🚧
</h4>

The ultra-dev library is a set of resources for common development tasks.


## Installation

Installation ultra-dev

```bash
  npm install ultra-dev
```


## Functionalities

**General**
- [x]  Credit card generator and validator
- [x]  Palondrome generator and validator
- [x]  Currency formatter
- [ ]  Vehicle plate generator and validator

**Brazil**
- [x]  CPF generator and validator
- [x]  CNPJ generator and validator
- [x]  RG generator and validator
- [ ]  CEP generator and validator 
- [ ]  CNH generator and validator  


## API documentation

#### CpfService

| Method   | Parameters       | Return       | Description                           |
| :---------- | :--------- | :--------- | :---------------------------------- |
| `toGenerate` | `withMask: boolean = false` | `string` | Return a CPF. If "withMask" is set to true, the CPF will be returned with a mask |
| `validate` | `value: string` | `boolean` | Returns true if the value is valid |


#### CnpjService

| Method   | Parameters       | Return       | Description                           |
| :---------- | :--------- | :--------- | :---------------------------------- |
| `toGenerate` | `withMask: boolean = false` | `string` | Return a CNPJ. If "withMask" is set to true, the CNPJ will be returned with a mask |
| `validate` | `value: string` | `boolean` | Returns true if the value is valid |


#### RgService

| Method   | Parameters       | Return       | Description                           |
| :---------- | :--------- | :--------- | :---------------------------------- |
| `toGenerate` | `withMask: boolean = false` | `string` | Return a RG. If "withMask" is set to true, the RG will be returned with a mask |
| `validate` | `value: string` | `boolean` | Returns true if the value is valid |


#### PalindromeService

| Method   | Parameters       | Return       | Description                           |
| :---------- | :--------- | :--------- | :---------------------------------- |
| `toGenerate` | `withMask: boolean = false` | `string` | Return a Palindrome |
| `validate` | `value: string` | `boolean` | Returns true if the value is valid |


#### CreditCardService

| Method   | Parameters       | Return       | Description                           |
| :---------- | :--------- | :--------- | :---------------------------------- |
| `toGenerate` | `brand: TypeCreditCardBrand` | `IRetrunCreditCardBrand` | Returns a credit card according to the brands |
| `validate` | `value: string` | `boolean` | Returns true if the value is valid |


#### CurrencyService

| Method   | Parameters       | Return       | Description                           |
| :---------- | :--------- | :--------- | :---------------------------------- |
| `format` | `value: number, currencySymbol: TypeCurrencySymbols = 'R$', decimalCount: number = 2, decimalSeparator: string = ',', thousandsSeparator: string = '.'` | `string` | Returns the number in currency format |
| `removeFormatting` | `value: string` | `number` | Remove currency formatting |


## Authors

- [@Gustavo Benevenuto](https://github.com/GustavoBenevenuto)


## Reference

 - [Credit card](https://github.com/avuenja/gerador)

