INSERT INTO "bank" ("name", "digital_only") VALUES
	('Banco do Brasil', false),
	('Caixa Econômica Federal', false),
	('Bradesco', false),
	('Itaú Unibanco', false),
	('Santander', false),
	('Banco Inter', true),
	('Nubank', true),
	('C6 Bank', true),
	('BTG Pactual', false),
	('PicPay Bank', true),
	('Outros / Não informado', false);
	
INSERT INTO "state" ("state", "region") VALUES
	('AC', 'Norte'),
	('AL', 'Nordeste'),
	('AP', 'Norte'),
	('AM', 'Norte'),
	('BA', 'Nordeste'),
	('CE', 'Nordeste'),
	('DF', 'Centro-Oeste'),
	('ES', 'Sudeste'),
	('GO', 'Centro-Oeste'),
	('MA', 'Nordeste'),
	('MT', 'Centro-Oeste'),
	('MS', 'Centro-Oeste'),
	('MG', 'Sudeste'),
	('PA', 'Norte'),
	('PB', 'Nordeste'),
	('PR', 'Sul'),
	('PE', 'Nordeste'),
	('PI', 'Nordeste'),
	('RJ', 'Sudeste'),
	('RN', 'Nordeste'),
	('RS', 'Sul'),
	('RO', 'Norte'),
	('RR', 'Norte'),
	('SC', 'Sul'),
	('SP', 'Sudeste'),
	('SE', 'Nordeste'),
	('TO', 'Norte');
	
INSERT INTO "fraud_channel" ("name") VALUES
	('Aplicativo bancário / Internet Banking'),
	('Redes sociais'),
	('E-mail'),
	('WhatsApp ou SMS'),
	('Telefone'),
	('Caixa eletrônico'),
	('Presencial'),
	('Outros / não especificado');
	
INSERT INTO "fraud_category" ("name", "description") VALUES
	('Phishing', 'Tentativa de enganar o usuário através de links ou mensagens falsas para obter dados.'),
	('Roubo de credenciais', 'Acesso não autorizado à conta por senhas obtidas indevidamente.'),
	('Transferência indevida via PIX', 'Transferências via PIX sem autorização do titular.'),
	('Falsa central bancária', 'Golpe onde o fraudador se passa por funcionário do banco.'),
	('Clonagem de cartão', 'Cópia dos dados do cartão para uso indevido.'),
	('Compra falsa online', 'Venda inexistente ou produto não entregue após pagamento.'),
	('Golpe do código de verificação', 'Solicitação ou uso indevido do código de verificação (SMS/WhatsApp).'),
	('Pedido de transferência urgente', 'Pressão para transferir recursos rapidamente.'),
	('Falso sequestro / extorsão', 'Ameaças ou chantagem para obter dinheiro.'),
	('Depósito falso', 'Comprovantes falsos ou enganos em depósitos.'),
	('Outros tipos de golpe', 'O golpe não está na lista.');
		
		