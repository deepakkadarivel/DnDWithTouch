function _(id) {
    return document.getElementById(id);
}

var droppedIn = false;

window.onload = function () {
    // Drag zone functionality
    var dropZone = _('drop_zone');

    dropZone.addEventListener('dragenter', handleDragEnter, false);
    dropZone.addEventListener('dragleave', handleDragLeave, false);
    dropZone.addEventListener('drop', handleDragDrop, false);

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

    function handleDragDrop(e) {
        e.preventDefault();
        var element_id = e
            .dataTransfer
            .getData("text");
        e
            .target
            .appendChild(_(element_id));
        _(element_id).removeAttribute("draggable")
        _(element_id).style.cursor = "default";
        droppedIn = true;
    }

    // Draggable element functionality
    var object1 = _('object1');
    var object2 = _('object2');
    var object3 = _('object3');

    object1.addEventListener('dragstart', handleDragStart, false);
    object1.addEventListener('dragend', handleDragEnd, false);
    object1.addEventListener('touchstart', handleTouchStart, false);
    object1.addEventListener('touchmove', handleTouchMove, false);
    object1.addEventListener('touchend', handleTouchEnd, false);

    object2.addEventListener('dragstart', handleDragStart, false);
    object2.addEventListener('dragend', handleDragEnd, false);
    object2.addEventListener('touchstart', handleTouchStart, false);
    object2.addEventListener('touchmove', handleTouchMove, false);
    object2.addEventListener('touchend', handleTouchEnd, false);

    object3.addEventListener('dragstart', handleDragStart, false);
    object3.addEventListener('dragend', handleDragEnd, false);
    object3.addEventListener('touchstart', handleTouchStart, false);
    object3.addEventListener('touchmove', handleTouchMove, false);
    object3.addEventListener('touchend', handleTouchEnd, false);

    function handleDragStart(e) {
        _('app_status').innerHTML = "Dragging the element " + e
            .target
            .getAttribute('id');
        e.dataTransfer.dropEffect = "move";
        e
            .dataTransfer
            .setData("text", e.target.getAttribute('id'));
    }

    function handleDragEnd(e) {
        if (droppedIn == false) {
            _('app_status').innerHTML = "You let the " + e
                .target
                .getAttribute('id') + " go.";
        }
        droppedIn = false;
    }

    function handleTouchStart(e) {
        _('app_status').innerHTML = "Touch start with element " + e
            .target
            .getAttribute('id');
    }

    function handleTouchMove(e) {
        var touchLocation = e.targetTouches[0];
        var pageX = (touchLocation.pageX - 50) + "px";
        var pageY = (touchLocation.pageY - 50) + "px";
        _('app_status').innerHTML = "Touch x " + pageX + " Touch y " + pageY;
        event.target.style.position = "absolute";
        event.target.style.left = pageX;
        event.target.style.top = pageY;
    }

    function handleTouchEnd(e) {
        e.preventDefault();
        var pageX = (parseInt(e.target.style.left) - 50);
        var pageY = (parseInt(e.target.style.left) - 50);

        if (detectTouchEnd(dropZone.offsetLeft, dropZone.offsetTop, pageX, pageY, dropZone.offsetWidth, dropZone.offsetHeight)) {
            dropZone.appendChild(e.target);
            e
                .target
                .removeAttribute("draggable")
            e.target.style.cursor = "default";
            droppedIn = true;
        }
    }

    function detectTouchEnd(x1, y1, x2, y2, w, h) {
        //Very simple detection here
        if (x2 - x1 > w) 
            return false;
        if (y2 - y1 > h) 
            return false;
        return true;
    }
}
