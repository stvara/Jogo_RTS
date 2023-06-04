function init(){
    $.ajax({
        url: 'views/login.html',
        type: 'get',
        data: {
            a:1            
        },
        dataType: 'html',
        context: $('#conteudo'),
        success: function(data){
            this.append(data);
        }
    });
}