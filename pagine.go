package main


import (
	"net/http"
	"fmt"
	"os/exec"
)


//*gestione paginaSegreta
func paginaSegreta1(w http.ResponseWriter, r *http.Request) {
	pag___methodGET("/paginaSegreta1", w, r)
	done := make(chan bool)
	go func() {
		cmd := exec.Command("cmd", "/c", "cd C:\\Users\\Utente\\Desktop\\proveProgetti\\prove_Go\\provaServer\\static\\strumenti\\python && .\\venv\\Scripts\\activate && python zip.py \\.env.7z open")
		output, err := cmd.CombinedOutput()
		if err != nil {
			fmt.Println("Errore durante l'esecuzione del comando:", err)
			done <- false
			return
		}
		fmt.Println(string(output))
		done <- true
	}()
	successful := <-done
	if successful { http.ServeFile(w, r, "C:\\Users\\Utente\\Desktop\\info\\variabili\\.env")
		} else { http.Error(w, "Errore durante l'esecuzione del comando", http.StatusInternalServerError)}
	go func() {
		cmd := exec.Command("cmd", "/c", "cd C:\\Users\\Utente\\Desktop\\proveProgetti\\prove_Go\\provaServer\\static\\strumenti\\python && .\\venv\\Scripts\\activate && python zip.py \\.env.7z delete")
		output, err := cmd.CombinedOutput()
		if err != nil {
			fmt.Println("Errore durante l'esecuzione del comando:", err)
			done <- false
			return
		}
		fmt.Println(string(output))
		done <- true
	}()
}
func paginaSegreta2(w http.ResponseWriter, r *http.Request) {
	pag___methodGET("/paginaSegreta2", w, r)
	done := make(chan bool)
	go func() {
		cmd := exec.Command("cmd", "/c", "cd C:\\Users\\Utente\\Desktop\\proveProgetti\\prove_Go\\provaServer\\static\\strumenti\\python && .\\venv\\Scripts\\activate && python zip.py \\segreto.7z open")
		output, err := cmd.CombinedOutput()
		if err != nil {
			fmt.Println("Errore durante l'esecuzione del comando:", err)
			done <- false
			return
		}
		fmt.Println(string(output))
		done <- true
	}()
	successful := <-done
	if successful { http.ServeFile(w, r, "C:\\Users\\Utente\\Desktop\\info\\variabili\\segreto.txt")
		} else { http.Error(w, "Errore durante l'esecuzione del comando", http.StatusInternalServerError)}
	go func() {
		cmd := exec.Command("cmd", "/c", "cd C:\\Users\\Utente\\Desktop\\proveProgetti\\prove_Go\\provaServer\\static\\strumenti\\python && .\\venv\\Scripts\\activate && python zip.py \\segreto.7z delete")
		output, err := cmd.CombinedOutput()
		if err != nil {
			fmt.Println("Errore durante l'esecuzione del comando:", err)
			done <- false
			return
		}
		fmt.Println(string(output))
	}()
}



func BasicAuth(next http.HandlerFunc, realm, UTENTE, PASSWORD string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		user, pass, ok := r.BasicAuth()
		if !ok || !checkCredentials(user, pass, UTENTE, PASSWORD) {
			w.Header().Set("WWW-Authenticate", `Basic realm="`+realm+`"`)
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Autenticazione richiesta"))
			return
		}
		next(w, r)
	}
}


