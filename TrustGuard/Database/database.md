# 20252_A3_trustguard_database
Diretório do banco de dados do sistema TrustGuard  
Inclui scripts de criação do banco de dados e suas tabelas, dados iniciais (seeds), diagrama ER e Dicionário de dados

## Estrutura do Diretório

**20252_A3_trustguard_database**

**/scripts**
- **create_tables_fraud_report.sql** – Criação das tabelas do banco
- **seed_data_fraud_report.sql** – Script de inserção dos dados iniciais
  
**/docs**
- **dicionario_dados.md**  – Documentação completa dos campos
- **DER_trustguard.png** – Diagrama Entidade Relacionamento  

**readme.md**

## Tabelas Principais

- **report** – Relatórios de fraude submetidos pelos usuários
- **aftermath** – Acompanhamento do caso após o reporte
- **bank** – Informações sobre bancos
- **state** – Estados brasileiros e regiões
- **fraud_channel** – Canais utilizados para fraudes
- **fraud_category** – Tipos de golpes e descrições

## Instruções para criação do banco de dados

Os scripts SQL estão adaptados para rodar em PostgreSQL, para a utilização em outros SGBDS é 
necessário adaptação do código.

**INSTRUÇÕES**

- Crie o banco de dados fraud_reports
```sql
CREATE DATABASE fraud_reports;
```
- Conecte-se ao banco de dados fraud_reports
- Rode o Script **create_tables_fraud_report.sql** para criação das tabelas do DB
- Rode o script **seed_data_fraud_report.sql** para popular as tabelas que necessitam de dados iniciais
