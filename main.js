function _(id) {
    return document.getElementById(id);
}

var droppedIn = false;

function drag_start(event) {
    _('app_status').innerHTML = "Dragging the element " + event
        .target
        .getAttribute('id');
}
window.onload = function () {
    var object1 = _('object1');
    object1.addEventListener('dragstart', handleDragStart, false);
    object1.addEventListener('touchstart', handleTouchStart, false);

    function handleDragStart(e) {
        _('app_status').innerHTML = "Dragging the element " + e
            .target
            .getAttribute('id');
    }

    function handleTouchStart(e) {
        _('app_status').innerHTML = "Touch start with element " + e
            .target
            .getAttribute('id');
    }
}
