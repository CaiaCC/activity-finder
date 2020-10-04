export default function spotsRemaining(activity) {
	const { bookings, max_number_of_participants } = activity;
	let spotLeft = max_number_of_participants;
	
	if (!Array.isArray(bookings) || !bookings.length ) {return spotLeft}

	const { number_of_participants } = bookings[0];
	spotLeft -= number_of_participants
	
	if (spotLeft < 0) {
		return 0
	} else {
		return spotLeft;
	}
}