
var $buttonEl = $('#addButton')
// $('.deleteButton').on('click',function(){
        
// })
var $ul = $('ul')
$buttonEl.on('click',function(){
    var $inputEl = $('#taskToAdd').val()
    var $newSkill = $(`
    <br><button class="deleteButton">X</button><li id="item">${$inputEl}</li>
    `)
    $ul.append($newSkill)
    $('.deleteButton').on('click',function(){
        $(this).next('li').fadeOut(500,function(){
            $(this).next('br').remove()
            $(this.remove())
        })
        $(this).fadeOut(500,function(){
            $(this.remove())
        })
    
    })
})

$('.deleteButton').on('click',function(){
    $(this).next('li').fadeOut(500,function(){
        $(this).next('br').remove()
        $(this.remove())
    })
    $(this).fadeOut(500,function(){
        $(this.remove())
    })

})
    