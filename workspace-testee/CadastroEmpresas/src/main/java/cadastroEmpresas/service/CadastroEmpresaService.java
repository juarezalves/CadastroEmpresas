package cadastroEmpresas.service;

import java.io.Serializable;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.transaction.Transactional;

import cadastroEmpresas.model.Empresa;
import cadastroEmpresas.repository.Empresas;

@Stateless
public class CadastroEmpresaService implements Serializable{
	
	@EJB
	Empresas empresas;	
	
	public void salvar(Empresa empresa) {
		empresas.save(empresa);
	}	
	
	public void remover(Empresa empresa) {
		empresas.remove(empresa);
	}
	
	

}
