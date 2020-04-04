package cadastroEmpresas.controller;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

import javax.ejb.EJB;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.primefaces.context.RequestContext;

import cadastroEmpresas.model.Empresa;
import cadastroEmpresas.model.TipoEmpresa;
import cadastroEmpresas.repository.Empresas;
import cadastroEmpresas.service.CadastroEmpresaService;
import cadastroEmpresas.util.FacesMessages;

@Named
@ViewScoped
public class GestaoEmpresasBean implements Serializable{
	
	private List<Empresa> todasEmpresas;
	private Empresa empresaEdicao = new Empresa();
	private Empresa empresaSelecionada;
	
	@EJB
	private Empresas empresas;
	
	@EJB
	private CadastroEmpresaService cadastroEmpresaService;
	
	
	private FacesMessages messages = new FacesMessages();
	
	public void prepararNovoCadastro() {
		empresaEdicao = new Empresa();
	}
	
	public void consultar() {
		todasEmpresas = empresas.listEmpresas(); 
	}
	
	public void salvar() {
		cadastroEmpresaService.salvar(empresaEdicao);
		consultar();
		
		messages.info("Empresa salva com sucesso!");
		
		RequestContext.getCurrentInstance().update(
				Arrays.asList("form:msgs", "form:empresa-table" ));
		
	}
	
	public void excluir() {
		empresas.remove(empresaSelecionada);
		empresaSelecionada = null;
		consultar();
		
		messages.info("Empresa excluída com sucesso!");
		
		
	}

	public List<Empresa> getTodasEmpresas() {
		return todasEmpresas;
	}
	
	public TipoEmpresa[] getTiposEmpresa() {
		return TipoEmpresa.values();
	}

	public Empresa getEmpresaEdicao() {
		return empresaEdicao;
	}

	public void setEmpresaEdicao(Empresa empresaEdicao) {
		this.empresaEdicao = empresaEdicao;
	}

	public Empresa getEmpresaSelecionada() {
		return empresaSelecionada;
	}

	public void setEmpresaSelecionada(Empresa empresaSelecionada) {
		this.empresaSelecionada = empresaSelecionada;
	}
	
	
	
	
}
