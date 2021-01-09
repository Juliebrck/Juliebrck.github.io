
// Ajouter un compteur 

$("#chiffre").text($(".todo2").length);



// Supprimer la valeur de la barre TODO lors du click

$('#todo').click(
    function(){
        $("#todo").val("");
    }
);


// Ajouter une nouvelle TODO avec la touche ENTREE + vider la barre de recherche

$('#todo').keydown(
    function(){
        if(event.keyCode === 13) {

            var newTodo = $("#todo").val();

            $(".box").append(`
                 <div class="todo2">
                <span>`+newTodo+`</span>
                <input id="delete" type="button" value="X">
                </div>`);
    
            $("#todo").val("");
         }
    $("#chiffre").text($(".todo2").length);
    });

// Ajouter une nouvelle TODO avec click sur bouton TODO + vider la barre de recherche

$('#add').click(
    function(){

        if($("#todo").val() != "") {
        
            var newTodo = $("#todo").val();

            $(".box").append(`
                <div class="todo2">
                <span>`+newTodo+`</span>
                <input id="delete" type="button" value="X">
                </div>`);
    
            $("#todo").val("");
        }
    $("#chiffre").text($(".todo2").length);
    });

// Supprimer les to do quand click sur la croix





$("body").on("click", "#delete", function(){
    $(this).parent().remove();
    $("#chiffre").text($(".todo2").length);
});

