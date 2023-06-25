import {useState} from 'react';
import {useRouter} from 'next/router';

function EventList({eventlist}) {
    const [eventData, setEventData] = useState(eventlist);
    const router = useRouter();

    async function filteredEvents() {
        const response = await fetch ('http://localhost:4000/events?category=sports');
        const data = await response.json ();
        setEventData(data);
        router.push('events?category=sports', undefined, { shallow: true });
    }

  return (
    <div>
      <button onClick={filteredEvents}>Sports events</button>
      <h3>List of Events</h3>
      {eventData.map (event => {
        return (
          <div>
            <h4>{event.id} || {event.name} || {event.category}</h4>
            <div>{event.description}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default EventList;

export async function getServerSideProps (context) {
    const { query } = context;
    const { category } = query;
    const queryString = category ? '?category=sports' : '';
  const response = await fetch (`http://localhost:4000/events${queryString}`);
  const data = await response.json ();
  return {
    props: {
      eventlist: data,
    },
  };
}
