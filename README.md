

<h1 align="center">
    <a href="https://www.npmjs.com/package/ultra-dev/">🔗 ultra-dev</a>
</h1>


<h4 align="center"> 
	🚧  ultra-dev: Em construção...  🚧
</h4>

A biblioteca ultra-dev é um conjunto de funcionalidades para tarefas comuns do desenvolvimento.


## Instalação

Use o npm ou o yarn para instalar este pacote:

```
npm i ultra-dev

yarn add ultra-dev
```

## Funcionalidades

- Geração e validação de Palindromo
- Geração e validação de CPF
- Geração e validação de CNPJ


## Usar

**PalindromeService**
```
import { PalindromeService } from 'ultra-dev'
const palindromeService = new PalindromeService()
const isValid = palindromeService.validate("ana")
// Result = true
const palindrome = palindromeService.toGenerate()
// Result = "laal"
```

**CnpjService**
```
import { CnpjService } from 'ultra-dev'
const cnpjService = new CnpjService()
const isValid = cnpjService.validate("77.936.772/0605-74")
// Result = true
const palindrome = cnpjService.toGenerate()
// Result = "64.578.092/9682-09"
```

**CpfService**
```
import { CpfService } from 'ultra-dev'
const cpfService = new CpfService()
const isValid = cpfService.validate("902.488.343-12")
// Result = true
const palindrome = cpfService.toGenerate()
// Result = "383.691.853-63"
```