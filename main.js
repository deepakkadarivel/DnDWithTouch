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
    var object2 = _('object2');
    var object3 = _('object3');

    object1.addEventListener('dragstart', handleDragStart, false);
    object1.addEventListener('touchstart', handleTouchStart, false);
    object1.addEventListener('touchmove', handleTouchMove, false);

    object2.addEventListener('dragstart', handleDragStart, false);
    object2.addEventListener('touchstart', handleTouchStart, false);
    object2.addEventListener('touchmove', handleTouchMove, false);

    object3.addEventListener('dragstart', handleDragStart, false);
    object3.addEventListener('touchstart', handleTouchStart, false);
    object3.addEventListener('touchmove', handleTouchMove, false);

    function handleDragStart(e) {
        _('app_status').innerHTML = "Dragging the element " + e
            .target
            .getAttribute('id');
        e.dataTransfer.dropEffect = "move";
        e
            .dataTransfer
            .setData("text", e.target.getAttribute('id'));
    }

    function handleTouchStart(e) {
        _('app_status').innerHTML = "Touch start with element " + e
            .target
            .getAttribute('id');
    }

    function handleTouchMove(e) {
        var touchLocation = e.targetTouches[0];
        _('app_status').innerHTML = "Touch x " + touchLocation.pageX + "px" + " Touch y " + touchLocation.pageY + "px";
        event.target.style.position = "absolute";
        event.target.style.left = touchLocation.pageX + "px";
        event.target.style.top = touchLocation.pageY + "px";
    }

    // Drag zone functionality
    var dropZone = _('drop_zone');

    dropZone.addEventListener('dragenter', handleDragEnter, false);
    dropZone.addEventListener('dragleave', handleDragLeave, false);

    function handleDragEnter(e) {
        _('app_status').innerHTML = "You are dragging over the " + e
            .target
            .getAttribute('id');
    }

    function handleDragLeave(e) {
        _('app_status').innerHTML = "You left the " + e
            .target
            .getAttribute('id');
    }
}
