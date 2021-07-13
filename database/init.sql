BEGIN;

DROP TABLE IF EXISTS users, books, bookCopies, borrow CASCADE;

CREATE TABLE users (
  u_id VARCHAR(255) PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  f_name VARCHAR(255) NOT NULL,
  l_name VARCHAR(255) NOT NULL,
  age INTEGER,
  location VARCHAR(255),
  email VARCHAR (255),
  phone VARCHAR(255)
);


CREATE TABLE books ( 
  b_id SERIAL PRIMARY KEY, 
  b_name VARCHAR(255),
  author VARCHAR(255),
  category TEXT, 
  copies INTEGER DEFAULT 0
);

CREATE TABLE bookCopies (
  id SERIAL PRIMARY KEY,                   
  book_id INTEGER REFERENCES books(b_id),   
  available BOOLEAN DEFAULT TRUE,     
);

CREATE TABLE borrow (
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(b_id),
  user_id INTEGER REFERENCES users(u_id),
  copy_id INTEGER REFERENCES bookCopies(id),
  taken BOOLEAN DEFAULT FALSE,
  received BOOLEAN DEFAULT FALSE,
);


-- -***********************************************************************************


INSERT INTO users VALUES
  ('20897', 'user01', 'fir','usr',25,'hell','i_cry_at_night@gmail.com','0513259875'),
  ('65982', 'user02', 'sec','usr',30,'heaven','yamiti_kodasai@hotmail.com','0564879915'),
  ('96133', 'user03', 'thrd','usr',15,'moon','oni-chan@outlook.com','0568947634'),
  
;

INSERT INTO books (b_id, b_name, category, copies) VALUES
  ('str01','A magical End','Bingiman freed','Announcing of invitation principles in.', 6),
  ('str02','Yakoza','auth02','Peculiar trifling absolute and wandered yet.', 2),
  ('ent01','the meme lord','auth03','Far stairs now coming bed oppose hunted become his.', 3),
  ('sci01','why do i exist','auth04','Curabitur arcu quam, imperdiet ac orci ac.', 4),
  ('str03','Robin of the Hood','auth05','Aenean blandit risus sed pellentesque.', 5)
;

INSERT INTO bookCopies (id, book_id, available) VALUES
  ('str01-01','str01', 'true'),
  ('str01-02','str01', 'true'),
  ('str01-03','str01', 'true'),
  ('str01-04','str01', 'true'),
  ('str01-05','str01', 'true'),
  ('str01-06','str01', 'true'),
  ('str02-01','str02', 'true'),
  ('str02-02','str02', 'true'),
  ('ent01-01','ent01', 'true'),
  ('ent01-02','ent01', 'true'),
  ('ent01-03','ent01', 'true'),
  ('sci01-01','sci01', 'true'),
  ('sci01-02','sci01', 'true'),
  ('sci01-03','sci01', 'true'),
  ('sci01-04','sci01', 'true'),
  ('str03-01','str03', 'true'),
  ('str03-02','str03', 'true'),
  ('str03-03','str03', 'true'),
  ('str03-04','str03', 'true'),
  ('str03-05','str03', 'true'),
;

-- TODO no need for insering values for the borrow table! it will be done via website

COMMIT;
