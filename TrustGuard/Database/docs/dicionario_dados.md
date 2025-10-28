# Dicionário de Dados - fraud_report_database

Este documento descreve as tabelas, colunas e relacionamentos do banco de dados **fraud_report_database**.

## Banco de Dados
- **Nome:** fraud_report  
- **SGBD:** PostgreSQL  
- **Versão:** 15  
- **Data de criação:** 27/10/2025  

---

### Tabela: report

| Coluna           | Tipo de dado   | Restrições / FK                | Descrição                                       |
|------------------|----------------|--------------------------------|-------------------------------------------------|
| id               | INT            | PK, NOT NULL                   | Identificador único do report                   |
| channel_id       | INT            | FK → fraud_channel(id)         | Canal pelo qual a fraude ocorreu                |
| category_id      | INT            | FK → fraud_category(id)        | Categoria do golpe relatado                     |
| bank_id          | INT            | FK → bank(id)                  | Banco envolvido na fraude                       |
| state_id         | INT            | FK → state(id)                 | Estado onde ocorreu a fraude                    |
| urban_or_rural   | VARCHAR(50)    | NULL                           | Indica se é área urbana ou rural                |
| loss_amount      | DECIMAL(10,2)  | NULL                           | Valor perdido na fraude                         |
| fraud_date       | DATE           | NULL                           | Data em que a fraude ocorreu                    |
| description      | TEXT           | NULL                           | Descrição detalhada da fraude pelo usuário      |
| report_date      | TIMESTAMP      | DEFAULT CURRENT_TIMESTAMP      | Data de registro do relatório                   |
| was_victim       | BOOLEAN        | DEFAULT TRUE                   | Indica se o usuário foi a vítima                |



### Tabela: aftermath

| Coluna             | Tipo de dado   | Restrições / FK     | Descrição                                      |
|--------------------|----------------|---------------------|------------------------------------------------|
| id                 | INT            | PK, NOT NULL        | Identificador do registro de desfecho          |
| report_id          | INT            | FK → report(id)     | Relaciona com o relatório de fraude            |
| reported_to_bank   | BOOLEAN        | DEFAULT FALSE       | Indica se a fraude foi reportada ao banco      |
| reported_to_police | BOOLEAN        | DEFAULT FALSE       | Indica se a fraude foi reportada à polícia     |
| recovered_amount   | DECIMAL(10,2)  | DEFAULT 0           | Valor recuperado após a fraude                 |
| resolved           | BOOLEAN        | DEFAULT FALSE       | Indica se a situação foi resolvida             |



### Tabela: bank

| Coluna        | Tipo de dado  | Restrições      | Descrição                     |
|---------------|---------------|-----------------|-------------------------------|
| id            | INT           | PK, NOT NULL    | Identificador único do banco  |
| name          | VARCHAR(100)  | NOT NULL        | Nome do banco                 |
| digital_only  | BOOLEAN       | NULL            | Indica se o banco é digital   |



### Tabela: state

| Coluna | Tipo de dado  | Restrições     | Descrição                      |
|--------|---------------|----------------|--------------------------------|
| id     | INT           | PK, NOT NULL   | Identificador único do estado  |
| state  | VARCHAR(50)   | NOT NULL       | Sigla do estado                |
| region | VARCHAR(50)   | NULL           | Região do estado               |



### Tabela: fraud_channel

| Coluna | Tipo de dado  | Restrições     | Descrição                                       |
|--------|---------------|----------------|--------------------------------------------------|
| id     | INT           | PK, NOT NULL   | Identificador único do canal                     |
| name   | VARCHAR(100)  | NOT NULL       | Por onde foi feita a fraude                      |



### Tabela: fraud_category

| Coluna       | Tipo de dado  | Restrições     | Descrição                                       |
|--------------|---------------|----------------|-------------------------------------------------|
| id           | INT           | PK, NOT NULL   | Identificador único da categoria                |
| name         | VARCHAR(100)  | NOT NULL       | Nome da categoria de fraude (ex.: Phishing)     |
| description  | TEXT          | NULL           | Descrição detalhada da categoria de golpe       |


---

**Última atualização:** 27/10/2025  

