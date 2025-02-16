use('school_slang'); // Select your database

// Add 'pending_deletion' field to all slang documents
db.getCollection('slangs').updateMany({}, { $set: { pending_deletion: false } });

// Verify update
db.getCollection('slangs').find({}, { slang: 1, pending_deletion: 1 });
