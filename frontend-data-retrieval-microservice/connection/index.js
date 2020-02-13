const kafka = require('kafka-node');
const AWS = require('aws-sdk');
const Producer = kafka.Producer;
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient();
let producer = null
let consumer = null

try {
	producer = new Producer(client);
	consumer = new Consumer(
		client,
		[{ topic: 'front-end-data-retrieval-service', offset: 0, partitions: 1 }],
		{
			autoCommit: false,
			fetchMaxWaitMs: 1000,
			fetchMaxBytes: 102400,
			encoding: 'utf8',
			fromOffset: true
		}
	)
	AWS.config.update({
		'accessKeyId': 'AKIAIXFXCUWLRCMD46LA',
		'secretAccessKey': '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'
	})

} catch (error) {
	console.log(error)
}
module.exports = { producer, consumer, AWS }