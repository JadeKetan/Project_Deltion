#pragma strict
	var lookUp	:Vector3;
function Start () {

}

function Update () {
	lookUp.x=(Input.GetAxis("Mouse Y"))*-100* Time.deltaTime;
	
	transform.Rotate(lookUp);	
}