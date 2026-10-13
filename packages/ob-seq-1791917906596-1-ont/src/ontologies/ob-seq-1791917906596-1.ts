import type {NodeReferenceValue} from '@_linked/core/utils/NodeReference';
import {createNameSpace} from '@_linked/core/utils/NameSpace';

/**
 * Load the data of this ontology into memory, thus adding the properties of the entities of this ontology to the local graph.
 */
export var loadData = () => {
  //@ts-ignore
  return import('../data/ob-seq-1791917906596-1.json',{ with: { type: "json" } }).then((data) => data.default);
};

/**
 * The namespace of this ontology, which can be used to create NamedNodes with IRIs not listed in this file
 */
export var ns = createNameSpace('https://ob-seq-1791917906596.id.create.now/ont/ob-seq-1791917906596-1/');

/**
 * A reference to the ontology itself.
 */
export var _self: NodeReferenceValue = ns('');

//Every class and property of this ontology, each exported as a node reference.
// export var ExampleClass: NodeReferenceValue = ns('ExampleClass');
// export var exampleProperty: NodeReferenceValue = ns('exampleProperty');

//An extra grouping object so all the entities can be accessed from the prefix/name
export const obSeq17919179065961 = {
  // ExampleClass,
  // exampleProperty,
};

//Registration lives in ob-seq-1791917906596-1.register.ts — see the comment there.
