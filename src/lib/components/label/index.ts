import AutoRef from './AutoRef.svelte';
import type { Heading } from './Heading';
import type { Labels } from './Labels.svelte';
import Section from './Section.svelte';
import SubSection from './SubSection.svelte';
import SubSubSection from './SubSubSection.svelte';

export type LabelsContext = {
	addHeading: (title: string, level: number) => Heading;
	labels: Labels;
};

export { AutoRef, Section, SubSection, SubSubSection };
