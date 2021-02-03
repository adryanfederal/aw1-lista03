const storage = localStorage


var exercise_one_input = document.getElementById('exercise-one-input');
var exercise_one_button = document.getElementById('exercise-one-button');
var exercise_one_response = document.getElementById('exercise-one-response');

const handleSaveClick = () => {
    let data = exercise_one_input.value
    storage.setItem('username', data)
    exercise_one_response.innerText = "Usuário salvo com sucesso";
    exercise_one_input.value = "";
}

const handleLoginClick = () => {
    let user_name = storage.getItem('username')
    let current_time = new Date();
    let wellcome_message = current_time.getHours() >= 0 && current_time.getHours() < 12 ? "Bom dia! " : 
        current_time.getHours() >= 12 && current_time.getHours() < 18 ? "Boa tarde! " : "Boa noite! "
    ;

    console.log(exercise_one_response)
    exercise_one_response.innerHTML = `${wellcome_message} ${user_name}.`;
    exercise_one_button.innerHTML = 'Logout';
    exercise_one_button.onclick = handleLogoutClick
    exercise_one_input.value = "";
}

const handleLogoutClick = () => {
    storage.setItem('username', null);
    exercise_one_response.innerText = 'Usuário deslogado'

    exercise_one_button.innerHTML = 'Salvar'
    exercise_one_button.onclick = null
    exercise_one_button.setAttribute('disabled', true)
}

exercise_one_input.addEventListener( 'keyup' ,(e) => {

    let user_name = e.target.value.toLowerCase()
    let saved_user_name = storage.getItem('username')

    if(user_name == saved_user_name){
        
        exercise_one_button.innerHTML = "Entrar"
        exercise_one_button.onclick = handleLoginClick
        exercise_one_button.removeAttribute('disabled')

    }else{
        exercise_one_button.innerHTML = "Salvar"
        exercise_one_button.onclick = handleSaveClick
        exercise_one_button.removeAttribute('disabled')
    }

})

