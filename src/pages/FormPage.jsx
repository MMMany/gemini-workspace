import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Alert,
  MenuItem,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const departments = [
  { value: 'dev', label: '개발팀' },
  { value: 'design', label: '디자인팀' },
  { value: 'pm', label: '기획팀' },
  { value: 'marketing', label: '마케팅팀' },
];

function FormPage() {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      department: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleReset = () => {
    reset();
    setSubmittedData(null);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
          React Hook Form &amp; MUI 샘플 폼
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          React Hook Form의 Controller와 MUI 입력 컴포넌트 및 유효성 검사 연동 예제입니다.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={3}>
            <Controller
              name="name"
              control={control}
              rules={{ required: '이름을 입력해 주세요.' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="이름"
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: '이메일을 입력해 주세요.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '올바른 이메일 주소를 입력해 주세요.',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="이메일"
                  type="email"
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="department"
              control={control}
              rules={{ required: '부서를 선택해 주세요.' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="부서"
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors.department)}
                  helperText={errors.department?.message}
                >
                  {departments.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Controller
              name="message"
              control={control}
              rules={{
                required: '내용을 입력해 주세요.',
                minLength: {
                  value: 10,
                  message: '최소 10자 이상 입력해 주세요.',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="내용"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors.message)}
                  helperText={errors.message?.message}
                />
              )}
            />

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="outlined" onClick={handleReset}>
                초기화
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SendIcon />}
              >
                제출하기
              </Button>
            </Stack>
          </Stack>
        </form>

        {submittedData && (
          <Box sx={{ mt: 4 }}>
            <Alert severity="success" sx={{ mb: 2 }}>
              폼이 성공적으로 제출되었습니다!
            </Alert>
            <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f5f5f5' }}>
              <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                제출된 데이터:
              </Typography>
              <pre style={{ margin: 0, fontSize: '0.875rem' }}>
                {JSON.stringify(submittedData, null, 2)}
              </pre>
            </Paper>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default FormPage;
