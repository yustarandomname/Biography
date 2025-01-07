<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import {
		ImageMaterial,
		interactivity,
		OrbitControls,
		Suspense,
		Text3DGeometry
	} from '@threlte/extras';
	import { get } from 'svelte/store';
	import { DoubleSide, PerspectiveCamera, Quaternion, Vector3 } from 'three';
	import { toast } from 'svelte-sonner';

	interactivity();

	let cameraPosition = $state(new Vector3(0, 0, 10));
	const { camera } = useThrelte();

	let interval = $state<ReturnType<typeof setInterval>>();
	let isActiveSpinning = false;

	function setCamera(from: Vector3, to: Vector3, DURATION = 300, INTERVALS = 20) {
		const rot = new Quaternion().setFromUnitVectors(
			from.clone().normalize(),
			to.clone().normalize()
		);

		let i = 1;
		interval = setInterval(() => {
			const delta = rot.clone().slerp(new Quaternion(), 1 - i / INTERVALS); // Slerp to the original position
			cameraPosition = from.clone().applyQuaternion(delta); // Apply the rotation
			i++;
		}, DURATION / INTERVALS);

		setTimeout(() => {
			if (interval) clearInterval(interval);

			cameraPosition = to;
		}, DURATION);
	}

	function resetCamera() {
		if (interval) clearInterval(interval);

		const cameraStore = get(camera) as PerspectiveCamera;
		const currentPosition = cameraStore.position.clone();

		setCamera(currentPosition, cameraPosition);
	}

	async function spinCamera() {
		if (isActiveSpinning) return;

		isActiveSpinning = true;

		const position = new Vector3(0, 0, 10);
		const cameraStore = get(camera) as PerspectiveCamera;
		const currentPosition = cameraStore.position.clone();

		const angle = currentPosition.angleTo(position);

		if (angle > 0.5) {
			resetCamera();
			await new Promise((resolve) => setTimeout(resolve, 400));
		}

		const isHeads = Math.random() > 0.5;
		const rolls = 2 + (isHeads ? 0 : 0.5);

		for (let i = 0; i < 20 * rolls + 1; i++) {
			const newPosition = position
				.clone()
				.applyAxisAngle(new Vector3(0, 1, 0), Math.PI * 2 * (i / 20));

			cameraPosition = newPosition;

			await new Promise((resolve) => setTimeout(resolve, 25));
		}

		isActiveSpinning = false;

		toast.message('🎉 🥳 🎊 🎉', {
			description: 'You scored' + (isHeads ? ' heads' : ' tails') + '!',
			duration: 6000,
			action: {
				label: 'Spin again',
				onClick: () => spinCamera()
			}
		});
	}
</script>

<T.PerspectiveCamera
	makeDefault
	position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}
	oncreate={(ref) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls enableDamping enableZoom={false} enablePan={false} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={2} />

<T.Group onclick={() => spinCamera()}>
	<Suspense>
		<T.Mesh position.z={0.12}>
			<T.PlaneGeometry args={[6.5, 6.5]} />
			<ImageMaterial
				transparent
				side={DoubleSide}
				url="./AbelFace.png"
				radius={3.25}
				zoom={1.1}
				monochromeColor="red"
				monochromeStrength={0.1}
			/>
		</T.Mesh>
	</Suspense>

	<T.Mesh rotation.x={Math.PI / 2}>
		<T.CylinderGeometry args={[3.5, 3.5, 0.2, 64]} />
		<T.MeshPhongMaterial color="red" reflectivity={2} />
	</T.Mesh>

	<T.Mesh scale={0.01} position.z={0.05} position.x={1.5} position.y={0.3} rotation.y={Math.PI}>
		<Text3DGeometry text={`Abel`} />
		<T.MeshStandardMaterial color="darkblue" />
	</T.Mesh>

	<T.Mesh scale={0.01} position.z={0.05} position.y={-1.1} position.x={2.5} rotation.y={Math.PI}>
		<Text3DGeometry text={`de Bruijn`} />
		<T.MeshStandardMaterial color="darkblue" />
	</T.Mesh>
</T.Group>
