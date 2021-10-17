# Sur les choix techniques
### Pourquoi Next.js
Au début du projet j'ai pris en consideration 3 starter kit: CRA, Gatsby et Nextjs. La simplicité du projet (une page et une modal) et le fait de ne pas avoir besoin de fetcher des données côté client ont exclu immediatement CRA. Mon choix c'est donc reduit à Gatsby ou Netx.js, qui en plus se pretent très bien à un projet basé sur des pages. Je connais pas la nature des données de l'api que j'ai pu utiliser (mock ou données dynamiques), mais j'ai préféré les traitrer comme des vrai données, pour avoir une resultat le plus possible ressemblante à une vrai application. J'ai donc choisi du utiliser du SSR. Gatsby ne gère que le static site generation (SSG) ou le fetch côté client, chose qui m'a amené à choisir Next.js.

### Pourquoi JavaScript et pas TypeScript
C'est peut-être le choix technique qui m'a interrogé le plus. Au début je ne me suis même pas posé la question, c'était évident que j'aurais utilisé TypeScript, sauf que quand je me suis plonché sur le projet il y a deux points que m'ont poussé à choisir JavaScript:

- Je n'avais pas à disposition le typage de donnés retournée par l'api. Une possible solution aurait été de générer le typage à partir du JSON. Le problème avec cette solution est que je ne connaissais pas quel `field` été required ou pas. Pour cette solution j'aurais donc du rendre tous le `fields` de données `nullable`. Chose que réduit fortement l'intérêt d'utiliser TS puisque j'aurais quand même du checker la presence de chaque field côté code comme pour du JS. Cette solution m'aurais principalement aidé à éviter des erreur de frappe.
- La library `@welcome-ui` utilise internament les `prop-types`. Dans ce cas aussi j'aurais pas eu à disposition le typage pour utiliser les components. Une première solution aurais était de déclarer la library dans un fichier `d.ts` à la racine du projet. Mais pour cette solution soit j'aurais un `any` comme typage de components, soit j'aurais dû réecrire les props acceptés pour chaque component.

Dans ce cas je pense que les avantages apportés par TypeScript n'étaient pas si intéressant.
