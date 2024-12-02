<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera
	makeDefault
	position={[0, 0, 10]}
	oncreate={(ref) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.Mesh rotation.x={Math.PI / 2}>
	<T.CylinderGeometry args={[3.5, 3.5, 0.2, 64]} />
	<T.MeshBasicMaterial color="red" />
</T.Mesh>
