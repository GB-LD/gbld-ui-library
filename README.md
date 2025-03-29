# GBLD-UI-LIBRARY

Une bibliothèque React de composants UI.

## 🚀 Installation

```bash
# npm
npm i gbld-ui-library
```

## 📋 Dépendances requises

Cette librairie nécessite les dépendances suivantes:

```json
{
  "peer dependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0",
    "tailwindcss": "^3.0.0",
    "lucide-react": "^0.263.0"
  }
}
```

## 📖 Documentation

### Modal

Un composant Modal flexible et personnalisable avec gestion des événements de fermeture.

```jsx
import { Modal } from 'gbld-ui-library';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Ouvrir Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Titre du Modal"
        description="Description optionnelle du Modal"
        size="md" // 'sm', 'md', 'lg', 'xl', 'full'
        position="center" // 'center', 'top'
      >
        <p>Contenu du modal...</p>
        <button onClick={() => setIsOpen(false)}>Fermer</button>
      </Modal>
    </>
  );
};
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | required | Contrôle l'affichage du modal |
| onClose | function | required | Fonction appelée à la fermeture |
| title | string | - | Titre du modal |
| description | string | - | Description sous le titre |
| size | string | 'md' | Taille: 'sm', 'md', 'lg', 'xl', 'full' |
| position | string | 'center' | Position: 'center', 'top' |
| showCloseButton | boolean | true | Afficher le bouton de fermeture |
| closeOnOutsideClick | boolean | true | Fermer en cliquant à l'extérieur |
| closeOnEsc | boolean | true | Fermer avec la touche Echap |
| backgroundColor | string | 'bg-white dark:bg-gray-800' | Classes TailwindCSS pour la couleur de fond |

### Table

Un composant de tableau avancé avec recherche, tri et pagination intégrés.

```jsx
import { Table } from 'gbld-ui-library';

const MyTable = () => {
  const columns = [
    { header: 'Nom', accessor: 'name', sortable: true },
    { header: 'Email', accessor: 'email', sortable: true },
    { header: 'Rôle', accessor: 'role', sortable: true },
  ];

  const data = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    // ...
  ];

  return (
    <Table
      columns={columns}
      data={data}
      itemsPerPage={10}
    />
  );
};
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| columns | array | required | Configuration des colonnes avec header, accessor, et sortable |
| data | array | required | Données à afficher dans le tableau |
| itemsPerPage | number | 10 | Nombre d'éléments par page |

### Pagination

Un composant de pagination propre et accessible.

```jsx
import { Pagination } from 'gbld-ui-library';

const MyPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| currentPage | number | required | Page actuelle |
| totalPages | number | required | Nombre total de pages |
| onPageChange | function | required | Fonction appelée lors du changement de page |

## 🛠️ Configuration TailwindCSS

Notre bibliothèque utilise TailwindCSS. Assurez-vous d'avoir correctement configuré Tailwind dans votre projet. Aucune configuration supplémentaire n'est nécessaire pour nos composants.

## 📄 Licence

MIT