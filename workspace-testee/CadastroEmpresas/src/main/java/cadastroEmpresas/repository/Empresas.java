package cadastroEmpresas.repository;

import java.io.Serializable;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import cadastroEmpresas.model.Empresa;

@Stateless
public class Empresas implements Serializable{
	
	@PersistenceContext
	EntityManager em;
	
	public void save(Empresa empresa) {
		em.merge(empresa);
	}
	
	public Empresa findById(Long id) {
		return em.find(Empresa.class, id);		
	}
	
	public List<Empresa> listEmpresas(){
		return em.createQuery("SELECT e FROM Empresa e", Empresa.class).getResultList();
	}
	
	public void remove(Empresa empresa) {
		empresa = findById(empresa.getId());
		em.remove(empresa);
	}
}
