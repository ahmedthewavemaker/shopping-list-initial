function start() {

    
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        $(this).closest('li').remove()
        
    })

    $('.shopping-list').on('click', '.shopping-item-toggle', e => {
        $(e.currentTarget).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
        
    })

    $('#js-shopping-list-form').submit( e => {
        const entry= $('#shopping-list-entry').val();

        $('ul').append(`
        <li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `);
        e.preventDefault();
    })

}
$(start)