import { servicesList } from '../../store/services';
import PageLayout from '../../components/Layouts/PageLayout';

export default function ServicesPage({ servicesListLists }) {
  return (
    <PageLayout>
      <h1>services page</h1>
      {servicesListLists.map((serviceItem) => {
        return (
          <article key={serviceItem.id}>
            <h1>{serviceItem.name}</h1>
            <img src={serviceItem.coverImage} alt='need to change this' />
            <p>{serviceItem.shortDescription}</p>
          </article>
        );
      })}
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      servicesListLists: servicesList,
    },
  };
};
