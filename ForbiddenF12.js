//��ֹ�Ҽ�

function click(e) {
    if (document.all) {
        if (event.button == 2 || event.button == 3) {
            alert("��ֹ�����ô����");
            oncontextmenu = 'return false';
        }
    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function() {
    if (window.event.keyCode == 12) {
        window.event.returnValue = false;
        return (false);
    }
}


//��ֹF12

function fuckyou() {
    window.close(); //�رյ�ǰ����(����)
    window.location = "about:blank"; //����ǰ������ת�ÿհ�ҳ
}

function click(e) {
    if (document.all) {
        if (event.button == 2 || event.button == 3) {
            alert("��ֹ�����ô����");
            oncontextmenu = 'return false';
        }

    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}
if (document.layers) {
    fuckyou();
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function() {
    if (window.event.keyCode == 123) {
        fuckyou();
        window.event.returnValue = false;
        return (false);
    }
}