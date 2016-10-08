#pragma strict
	var move: Vector3;
	var look :Vector3;
function Start () {

}

function Update () {
	
	
	move.x= Input.GetAxis("Horizontal")*10*Time.deltaTime;
	move.z=Input.GetAxis("Vertical")*10*Time.deltaTime;
	transform.Translate(move);
	//view
	look.y=(Input.GetAxis("Mouse X"))*100* Time.deltaTime;
	transform.Rotate(look);
}

