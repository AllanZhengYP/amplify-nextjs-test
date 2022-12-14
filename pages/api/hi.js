export default function handler(req, res) {
    res.status(200).json({ name: 'Hello Prithvi' })

    console.log('Response done.....');
  }