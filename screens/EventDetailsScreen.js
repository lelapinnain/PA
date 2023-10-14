import Details from '../Components/Details'

const EventDetailsScreen = ({ route }) => {
  return <Details event={route.params.event} />
}
export default EventDetailsScreen
