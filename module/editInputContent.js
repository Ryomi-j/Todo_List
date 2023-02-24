export const editInputContent = (e) => {
    const $item = e.target.closest('.item')
    const $label = $item.querySelector('.content')
    const $editInput =  $item.querySelector('.todoInput')
    const value = $editInput.value // 기존값

    if(e.target.className === 'content') {
        $label.style.display = 'none'
        $editInput.style.display = 'block'
        $editInput.focus()
        $editInput.value = ""
        $editInput.value = $label.innerText
    }
}