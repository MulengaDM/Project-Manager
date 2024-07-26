import pytest
from app import app, db, User, Task
from flask_jwt_extended import create_access_token

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()

def test_register(client):
    response = client.post('/register', json={'username': 'testuser', 'password': 'testpass'})
    assert response.status_code == 200
    assert b'registered successfully' in response.data

def test_login(client):
    client.post('/register', json={'username': 'testuser', 'password': 'testpass'})
    response = client.post('/login', json={'username': 'testuser', 'password': 'testpass'})
    assert response.status_code == 200
    assert 'access_token' in response.get_json()

def test_create_task(client):
    client.post('/register', json={'username': 'testuser', 'password': 'testpass'})
    login_response = client.post('/login', json={'username': 'testuser', 'password': 'testpass'})
    token = login_response.get_json()['access_token']
    response = client.post('/tasks', json={'title': 'Test Task', 'description': 'Test Description', 'due_date': '2024-01-01'}, headers={'Authorization': f'Bearer {token}'})
    assert response.status_code == 200
    assert b'task created' in response.data
