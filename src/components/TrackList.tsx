export default function TrackList() {
  const tracks = [
    { title: 'Track 1', time: '3:42' },
    { title: 'Track 2', time: '5:20' },
    { title: 'Track 3', time: '6:32' },
    { title: 'Track 4', time: '4:15' },
    { title: 'Track 5', time: '8:55' },
    { title: 'Track 6', time: '6:48' },
    { title: 'Track 7', time: '9:42' },
    { title: 'Track 8', time: '4:56' },
    { title: 'Track 9', time: '7:22' },
    { title: 'Track 10', time: '10:43' },
    { title: 'Track 11', time: '12:22' },
    { title: 'Track 12', time: '7:25' },
    { title: 'Track 13', time: '8:14' },
    { title: 'Track 14', time: '9:33' },
    { title: 'Track 15', time: '6:45' },
    { title: 'Track 16', time: '7:34' },
    { title: 'Track 17', time: '2:55' },
  ];

  return (
    <>
      {tracks.map(({ title, time }) => (
        <ul>
          <li>
            <span className="flex p-3  border-b border-gray-700">
              <div className="pl-5 pr-56">{title}</div>
              <div>{time}</div>
            </span>
          </li>
        </ul>
      ))}
    </>
  );
}
