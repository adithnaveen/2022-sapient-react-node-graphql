import bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;



// utility works 

// bcrypt works 
export const hash = async (password) => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}


// compare password with hashed password 

export const compare = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}

